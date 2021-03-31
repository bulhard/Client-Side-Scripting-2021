using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using _09_jQuery_Ajax.Models;

namespace _09_jQuery_Ajax.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public JsonResult GetStudent(int id)
        {
            Student student = new Student
            {
                Id = id,
                Name = "Ivan"
            };

            return new JsonResult(student);
        }
    }
}