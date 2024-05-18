using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCRM.IService;
using SCRM.Model;

namespace SCRM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassesController : ControllerBase
    {
        private readonly IClassess _class;

        public ClassesController(IClassess commonService)
        {
            _class = commonService;
        }

        [HttpGet("GetAllClassess")]
        public IActionResult GetAllClassess()
        {

            var data = _class.GetAllClass();
            return Ok(data);
        }

        [HttpGet("GetAllClassessById/{Id}")]
        public IActionResult GetAllClassess(int Id)
        {

            var data = _class.GetClassById(Id);
            return Ok(data);
        }


        [HttpPost("InsertUpdatedClassess")]
        public IActionResult InsertUpdatedClassess(MClass mClass)
        {
            var data = _class.InsertUpdateClass(mClass);
            return Ok(data);
        }

    }
}
