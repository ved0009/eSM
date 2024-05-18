using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SCRM.IService;
using SCRM.Model;

namespace SCRM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuth _auth;
        public AuthController(IAuth auth)
        {
            _auth = auth;
        }

        [HttpPost("Login")]
        public IActionResult Login(MUserLogin login)
        {
            var result = _auth.Login(login);
            return Ok(result);
        }
    }
}
