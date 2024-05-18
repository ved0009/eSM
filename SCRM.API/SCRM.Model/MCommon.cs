using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Model
{
    public class MCommon
    {

    }

    public class MRole
    {
        public int Id { get; set; }
        public string RoleName { get; set; }
        public int Isactive { get; set; }
    }



}
