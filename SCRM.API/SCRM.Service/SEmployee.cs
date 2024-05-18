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
    public class SEmployee : IEmployee
    {
        private readonly IDapperConnections _dapper;
        Response response;
        public SEmployee(IDapperConnections dapper)
        {
                _dapper = dapper;
            
        }

        public Response GetEmployee()
        {
            using (response = new Response())
            {
                try
                {
                    List<MEmployeeList> employeeLists = new List<MEmployeeList>(); 
                    var dbparams = new DynamicParameters();
                    dbparams.Add("@pid", 0, DbType.Int32);

                    employeeLists = _dapper.GetAll<MEmployeeList>("sp_std_GetAllEmployees", dbparams, commandType: CommandType.StoredProcedure);
                    if (employeeLists.Count > 0)
                    {
                       
                        response.totalRecords = 1;
                        response.statusCode = 200;                                                                      
                        response.message = "Success";
                        response.success = true;
                        response.responseData = employeeLists;
                       
                    }
                    else
                    {
                        response.totalRecords = 0;
                        response.statusCode = 404;
                        response.message = "No record Found";
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

        public Response GetEmployeeById(int Id)
        {
            using (response = new Response())
            {
                try
                {
                    var dbparams = new DynamicParameters();
                    dbparams.Add("@pid", Id, DbType.Int32);
                    var result = new MEmployee();
                    result = _dapper.Get<MEmployee>("sp_std_GetAllEmployees", dbparams, commandType: CommandType.StoredProcedure);
                    if (result != null)
                    {
                       
                        response.totalRecords = 1;
                        response.statusCode = 200;
                        response.message = "Success";
                        response.success = true;
                        response.responseData = result;
                      
                    }
                    else
                    {
                        response.totalRecords = 0;
                        response.statusCode = 404;
                        response.message ="No record found";
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

        public Response InsertUpdateEmployee(MEmployee employee)
        {
            using (response = new Response())
            {
                try
                {
                    var dbparams = new DynamicParameters();
                    dbparams.Add("@pid", employee.Id, DbType.Int32);
                    dbparams.Add("@pfullname", employee.FullName, DbType.String);
                    dbparams.Add("@pimage", employee.ImageUrl, DbType.String);
                    dbparams.Add("@proleId", employee.Role, DbType.Int32);
                    dbparams.Add("@pdateOfJoining", employee.DateOfJoining, DbType.DateTime);
                    dbparams.Add("@pmobile", employee.Mobile, DbType.String);
                    dbparams.Add("@pmonthlysalaty", employee.MonthlySalary, DbType.Decimal);
                    dbparams.Add("@pfatherOrHusbandName", employee.FatherOrHusbandName, DbType.String);
                    dbparams.Add("@pgender", employee.Gender, DbType.Int32);
                    dbparams.Add("@pexperience", employee.Experience, DbType.Int32);
                    dbparams.Add("@peducation", employee.Education, DbType.Int32);
                    dbparams.Add("@pnationalid", employee.NationalId, DbType.Int32);
                    dbparams.Add("@preligion", employee.Religion, DbType.Int32);
                    dbparams.Add("@pemail", employee.EmailAddress, DbType.String);
                    dbparams.Add("@pbloodGroup", employee.BloodGroup, DbType.Int32);
                    dbparams.Add("@DOB", employee.DateOfBirth, DbType.DateTime);
                    dbparams.Add("@pAddress", employee.HomeAddress, DbType.String);
              
               var      result = _dapper.Insert<string>("sp_std_InsertUpdateEmployees", dbparams, commandType: CommandType.StoredProcedure);
                    if (result== "success")
                    {
                       
                        response.totalRecords = 1;
                        response.statusCode = 200;
                        response.message = "Success";
                        response.success = true;
                        response.responseData = result;
                        
                    }
                    else
                    {
                        response.totalRecords = 0;
                        response.message ="Something went wrong while doing this";
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
