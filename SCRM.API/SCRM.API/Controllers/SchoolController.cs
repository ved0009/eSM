using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCRM.IService;
using SCRM.Model;

namespace SCRM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchoolController : ControllerBase
    {
        private readonly ISchool _school;
        public SchoolController(ISchool school)
        {
            _school = school;
        }

        [HttpPost("InsertUpdate")]
        public IActionResult InsertUpdate(MUserLogin login)
        {
            //var result = _school.(login);
            //return Ok(result);
           return  Ok();
        }
        [HttpGet("BySchoolId/{id}")]
        public IActionResult BySchoolId(int id)
        {
            //var result = _school.(login);
            //return Ok(result);
           return  Ok();
        }
    }
}
