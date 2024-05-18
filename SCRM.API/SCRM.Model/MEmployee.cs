using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Model
{
    public class MEmployee
    {

        public int Id { get; set; }
        public string FullName { get; set; }
        public string Mobile { get; set; }
        public int Role { get; set; }
        public string ImageUrl { get; set; }
        public DateTime DateOfJoining { get; set; }
        public decimal MonthlySalary { get; set; }
        public string FatherOrHusbandName { get; set; }
        public int Gender { get; set; }
        public int Experience { get; set; }
        public int NationalId { get; set; }
        public int Religion { get; set; }
        public string EmailAddress { get; set; }
        public int Education { get; set; }
        public int BloodGroup { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string HomeAddress { get; set; }
        public int Isactive { get; set; }


    }

    public class MEmployeeList
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Mobile { get; set; }
        public int Role { get; set; }
        public string RoleName { get; set; }
        public string ImageUrl { get; set; }
    }



}
