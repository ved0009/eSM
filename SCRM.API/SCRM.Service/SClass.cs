using Dapper;
using SCRM.IService;
using SCRM.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Service
{
    public class SClass : IClassess
    {
        private readonly IDapperConnections _dapper;
        private static readonly string Secret = "your_secret_key_here";

        private Response response;

        public SClass(IDapperConnections dapper)
        {
            _dapper = dapper;
        }

        public Response GetAllClass()
        {
            using (response = new Response())
            {
                try
                {
                    List<MClass> classLists = new List<MClass>();
                    var param = new DynamicParameters();
                      param.Add("@pid", 0, DbType.Int32);
                    classLists = _dapper.GetAll<MClass>("sp_std_GetAllClass", param, commandType: CommandType.StoredProcedure);
                    if (classLists != null)
                    {

                        response.totalRecords = 1;
                        response.message = "Success";
                        response.success = true;
                        response.statusCode = 200;
                        response.responseData = classLists;

                    }
                    else
                    {
                        response.totalRecords = 0;
                        response.statusCode=404;
                        response.message = "No record found";
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

        public Response InsertUpdateClass(MClass details)
        {
            using (response = new Response())
            {
                try
                {
                   
                    var param = new DynamicParameters();
                    param.Add("@pid", details.Id, DbType.Int32);
                    param.Add("@pclassname", details.ClassName, DbType.String);
                    param.Add("@pmonthtutionfees", details.MonthTutionFees, DbType.Decimal);
                    param.Add("@pclassteacherid", details.ClassTeacherId, DbType.Int32);
                    param.Add("@ptotalboys", details.TotalBoys, DbType.Int32);
                    param.Add("@ptotalgirls", details.TotalGirls, DbType.Int32);
                    param.Add("@ptotalstudents", details.TotalStudents, DbType.Int32);
                  var result   = _dapper.Insert<string>("sp_InsertUpdateClasses", param, commandType: CommandType.StoredProcedure);
                    if (result == "success")
                    {
                        response.totalRecords = 1;
                        response.statusCode = 200;
                        response.message = "New class created";
                        response.success = true;
                        response.responseData ="New class created";
                    }
                    else
                    {
                        response.totalRecords = 0;
                        response.statusCode = 401;
                        response.message = "Something went wrong while creating new class";
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

        public Response GetClassById(int Id)
        {
            using (response = new Response())
            {
                try
                {
                    //List<MClass> classLists = new List<MClass>();
                    var param = new DynamicParameters();
                    param.Add("@pid", Id, DbType.Int32);
                  var  classLists = _dapper.Get<MClass>("sp_std_GetAllClass", param, commandType: CommandType.StoredProcedure);
                    if (classLists != null)
                    {

                        response.totalRecords = 1;
                        response.message = "Success";
                        response.success = true;
                        response.statusCode = 200;
                        response.responseData = classLists;

                    }
                    else
                    {
                        response.totalRecords = 0;
                        response.statusCode = 404;
                        response.message = "No record found";
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