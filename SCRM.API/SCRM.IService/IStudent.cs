using SCRM.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.IService
{
    public interface IStudent
    {
        Response GetAllStudentLists(int Id);
        Response InsertUpdateStudentDetails(InsertUpdateStudentDetails insertUpdateStudentDetails);
    }
}
