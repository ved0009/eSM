using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.Model
{
    public class MClass
    {
        public int Id { get; set; }
        public string  ClassName { get; set; }
        public decimal MonthTutionFees { get; set; }
        public int ClassTeacherId { get; set; }
        public int TotalBoys { get; set; }
        public int TotalGirls { get; set; }
        public int TotalStudents { get; set; }
         
    }


}
