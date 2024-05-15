using Dapper;
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
    public class SSchool:ISchool
    {
        private readonly IDapperConnections _dapper;
        private static readonly string Secret = "your_secret_key_here";

        private Response response;

        public SSchool(IDapperConnections dapper)
        {
            _dapper = dapper;
        }

        public Response CheckDb()
        {
            using (response = new Response())
            {
                try
                {
                    List<TestDb> mCountries = new List<TestDb>();
                    var param = new DynamicParameters();
                    mCountries = _dapper.GetAll<TestDb>("sp_get_userlists", param, commandType: CommandType.StoredProcedure);
                    if (mCountries.Count > 0)
                    {

                        response.totalRecords = mCountries.Count;
                        response.message = "Success";
                        response.success = true;
                        response.responseData = mCountries;

                    }
                    else
                    {
                        response.totalRecords = mCountries.Count;
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

        public Response ProfileDetails(int userid)
        {
            using (response = new Response())
            {
                try
                {
                    MUserProfileDetails profile = new MUserProfileDetails();
                    var param = new DynamicParameters();
                    param.Add("puserid", userid, DbType.Int32);
                    profile = _dapper.Get<MUserProfileDetails>("sp_get_userdetails", param, commandType: CommandType.StoredProcedure);
                    if (profile != null)
                    {

                        response.totalRecords = 1;
                        response.message = "Success";
                        response.success = true;
                        response.responseData = profile;

                    }
                    else
                    {
                        response.totalRecords = 0;
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

        public Response GetAllStudentLists(int Id)
        {
            using (response = new Response())
            {
                try
                {
                    StudentList studentLists = new StudentList();
                    var param = new DynamicParameters();
                    param.Add("@createdBy", Id, DbType.Int32);
                    studentLists = _dapper.Get<StudentList>("sp_std_GetAllStudents", param, commandType: CommandType.StoredProcedure);
                    if (studentLists != null)
                    {

                        response.totalRecords = 1;
                        response.message = "Success";
                        response.success = true;
                        response.responseData = studentLists;

                    }
                    else
                    {
                        response.totalRecords = 0;
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