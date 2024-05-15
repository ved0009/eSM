using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Model
{
    public class MStudent
    {

    }

    public class StudentList
    {
        // sp name = sp_std_GetAllStudents
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string StudentId { get; set; }
    }

    public class InsertUpdateStudentDetails
    {
        public int StudentId { get; set; } = 0;
        public string Name { get; set; }  
        public string Class { get; set; }  
        public string Section { get; set; }  
        public string Image { get; set; }  
        public DateTime DateOfAdmission { get; set; }  
        public decimal FeeDiscount { get; set; }  
        public string Mobile { get; set; }

        // other infomations //

        public DateTime DateOfBirth { get; set; }
        public int StudentBirthNicId { get; set; }
        public int Orphan { get; set; }
        public int Gender { get; set; }
        public int OSC { get; set; }
        public string IdentityMarks { get; set; }
        public string PreviousSchool { get; set; }
        public int Religion { get; set; }
        public int BloodGroup { get; set; }
        public string BoardRollNumber { get; set; }
        public string FamilyAddress { get; set; }
        public string DiseaseIfAny { get; set; }
        public string AnyAdditionalNotes { get; set; }
        public int TotalSiblings { get; set; }
        public string  Address { get; set; }
        public List<InsertUpdateStudentDetailsParentsInfo> insertUpdateStudentDetailsParentsInfos { get; set; }
    }

    public class InsertUpdateStudentDetailsParentsInfo
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public int NationalId { get; set; }
        public int OccupationType { get; set; }
        public string ParrentType { get; set; }
        public int EducationType { get; set; }
        public string Mobile { get; set; }
        public string Profession { get; set; }
        public double Income { get; set; } = double.NaN;
    }

}
