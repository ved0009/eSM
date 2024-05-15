using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCRM.IService;
using SCRM.Model;

namespace SCRM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {

        private readonly IStudent _students;

        public StudentController(IStudent students)
        {
            _students = students;
        }

        [HttpGet("GetAllStudentLists/{Id}")]

        public IActionResult GetAllStudentLists(int Id)
        {
            var result = _students.GetAllStudentLists(Id);
            return Ok(result);
        }

        [HttpPost("InsertUpdateStudentDetails")]

        public IActionResult InsertUpdateStudentDetails(InsertUpdateStudentDetails  studentDetails)
        {
            var result = _students.InsertUpdateStudentDetails(studentDetails);
            return Ok(result);
        }

    }
}
