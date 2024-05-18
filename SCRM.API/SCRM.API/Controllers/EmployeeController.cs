using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCRM.IService;
using SCRM.Model;

namespace SCRM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployee _emp;

        public EmployeeController(IEmployee emp)
        {
            _emp = emp;
        }

        [HttpGet("GetEmployee")]
        public IActionResult GetEmployee()
        {

            var data = _emp.GetEmployee();
            return Ok(data);
        }

        [HttpGet("GetEmployeeById/{Id}")]
        public IActionResult GetEmployeeById(int Id)
        {

            var data = _emp.GetEmployeeById(Id);
            return Ok(data);
        }


        [HttpPost("InsertUpdateEmployee")]
        public IActionResult InsertUpdateEmployee(MEmployee employee)
        {
            var data = _emp.InsertUpdateEmployee(employee);
            return Ok(data);
        }
    }
}
