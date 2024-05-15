using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Model
{
    public class MUser
    {
        public int Id { get; set; }
        public int Idd { get; set; }
    }


    public class MUserLogin
    {
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; }= string.Empty;

    }
    
    public class MUserLoginDetail

    {
        public int UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; }= string.Empty;
        public int RoleId { get; set; }
        public string RoleName { get; set; } = "User";

    }
    public class MUserProfileDetails
    {
        public int UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string FName { get; set; } = string.Empty;
        public string LName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public DateTime Dob { get; set; }
        public int RoleId { get; set; }
        public int AddressId { get; set; }
        public int DocumentsId { get; set; }
        public int AvatarId { get; set; }
        public int IsEmailVerified { get; set; }
        public int IsActive { get; set; }
        public DateTime CreatedOn { get; set; }
        public string RoleName { get; set; } = "User";
    }


}
