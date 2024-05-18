using Dapper;
using Microsoft.Extensions.Configuration;
using SCRM.IService;
using SCRM.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Service
{
    public class SAuth : IAuth
    {
        private readonly IDapperConnections _dapper;
         private readonly IConfiguration _config;
        Response response;
        public SAuth(IDapperConnections dapper,IConfiguration config)
        {
                _dapper = dapper;
            _config = config;
        }

        public Response Login(MUserLogin login)
        {
            using (response = new Response())
            {
                try
                {
                    var dbparams = new DynamicParameters();
                    dbparams.Add("@pusername", login.UserName, DbType.String);
                    dbparams.Add("@ppassword", login.Password, DbType.String);
                    var result = new MUserLoginDetail();
                    result = _dapper.Get<MUserLoginDetail>("sp_user_login", dbparams, commandType: CommandType.StoredProcedure);
                    if (result != null)
                    {
                        var token = Helper.GenerateToken(result,_config);
                        response.totalRecords = 1;
                        response.message = "Success";
                        response.success = true;
                        response.responseData = result;
                        response.token = token;
                    }
                    else
                    {
                        response.totalRecords = 0;
                        response.message = login.UserName + " " + "does not exists please contact to administrator";
                        response.success = false;
                        response.responseData = null;


                    }
                }
                catch (Exception ex)
                {
                    response.totalRecords = -1;
                    response.message = ex.Message;
                    response.success = false;
                    response.responseData = ex.Message;


                }
            }

            return response;
        }
    }
}
