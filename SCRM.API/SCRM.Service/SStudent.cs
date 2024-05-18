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
    public class SStudent : IStudent
    {
        private readonly IDapperConnections _dapper;
        private static readonly string Secret = "your_secret_key_here";

        private Response response;

        public SStudent(IDapperConnections dapper)
        {
            _dapper = dapper;
        }

        public Response GetAllStudentLists(int Id)
        {
            using (response = new Response())
            {
                try
                {
                    List<StudentList> studentLists = new List<StudentList>();
                    var param = new DynamicParameters();
                    param.Add("@createdBy", Id, DbType.Int32);
                    studentLists = _dapper.GetAll<StudentList>("sp_std_GetAllStudents", param, commandType: CommandType.StoredProcedure);
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

        public Response InsertUpdateStudentDetails(InsertUpdateStudentDetails details)
        {
            using (response = new Response())
            {
                try
                {
                   
                    var param = new DynamicParameters();
                    param.Add("@studentId", details.StudentId, DbType.Int32);
                    param.Add("@name", details.Name, DbType.String);
                    param.Add("@class", details.Class, DbType.String);
                    param.Add("@section", details.Section, DbType.String);
                    param.Add("@image", details.Image, DbType.String);
                    param.Add("@dateOfAdmission", details.DateOfAdmission, DbType.DateTime);
                    param.Add("@mobile", details.Mobile, DbType.String);
                    param.Add("@feeDiscount", details.FeeDiscount, DbType.Decimal);

                    param.Add("@StudentID", details.StudentId, DbType.Int32);
                    param.Add("@DOB", details.DateOfBirth, DbType.DateTime);
                    param.Add("@StudentDocumentID", details.StudentBirthNicId, DbType.String);
                    param.Add("@isOrphan", details.Orphan, DbType.Int32);
                    param.Add("@Gender", details.Gender, DbType.Int32);
                    param.Add("@Cast", details.Religion, DbType.Int32);
                    param.Add("@OSC", details.OSC, DbType.Int32);
                    param.Add("@IdentificationMark", details.IdentityMarks, DbType.String);
                    param.Add("@PreviousSchool", details.PreviousSchool, DbType.String);
                    param.Add("@Religion", details.Religion, DbType.Int32);
                    param.Add("@BloodGroup", details.BloodGroup, DbType.Int32);
                    param.Add("@SRNBoardRollNo", details.BoardRollNumber, DbType.String);
                    param.Add("@Family", details.FamilyAddress, DbType.String);
                    param.Add("@Disease", details.DiseaseIfAny, DbType.String);
                    param.Add("@AdditionalNote", details.AnyAdditionalNotes, DbType.String);
                    param.Add("@TotalSibling", details.TotalSiblings, DbType.Int32);
                    param.Add("@Address", details.Address, DbType.String);
                    //details.StudentId = _dapper.Insert<int>("sp_std_InsertUpdateStudentOtherInfo", param, commandType: CommandType.StoredProcedure);

                    var parentcount = details.insertUpdateStudentDetailsParentsInfos.Count;

                   details.StudentId  = _dapper.Insert<int>("sp_std_InsertUpdateStudentDetails", param, commandType: CommandType.StoredProcedure);
                    if (details.StudentId > 0)
                    {
                        var dbparam = new DynamicParameters();
                        details.insertUpdateStudentDetailsParentsInfos.ForEach((x) =>
                        {
                            dbparam.Add("@StudentID", details.StudentId, DbType.Int32);
                            dbparam.Add("@ParentType", x.ParrentType, DbType.String);
                            dbparam.Add("@Name", x.Name, DbType.String);
                            dbparam.Add("@NationalID", x.NationalId, DbType.String);
                            dbparam.Add("@Occupation",x.OccupationType, DbType.String);
                            dbparam.Add("@Education", x.EducationType, DbType.String);
                            dbparam.Add("@Mobile", x.Mobile, DbType.String);
                            dbparam.Add("@Profession", x.Profession, DbType.String);
                            dbparam.Add("@Income", x.Income, DbType.String);
                            //sp_std_InsertUpdateStudentParentInfo
                            var rresult = _dapper.Insert<string>("sp_std_InsertUpdateStudentParentInfo", dbparam, commandType: CommandType.StoredProcedure);

                        });
                      
                        response.totalRecords = 1;
                        response.message = "Success";
                        response.success = true;
                        response.responseData ="Registration successfull";

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