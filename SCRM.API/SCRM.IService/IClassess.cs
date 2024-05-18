using SCRM.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SCRM.IService
{
    public interface IClassess
    {
        Response GetAllClass();   
        Response GetClassById(int Id);   
        Response InsertUpdateClass(MClass mClass);   
    }
}
