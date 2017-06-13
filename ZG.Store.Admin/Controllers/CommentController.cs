using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using ZG.Store.Services;
using ZG.Store.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using ZG.Store.Domain.Models;
using ZG.Store.Admin.CustomActionfilters;
using ZG.Store.Domain.DTO;

namespace ZG.Store.Admin.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    public class CommentController : Controller
    {
        private readonly ICommentsService _commentsService;
        private IHostingEnvironment _hostingEnv;

        public CommentController(ICommentsService commentsService, IHostingEnvironment hostingEnv)
        {
            _commentsService = commentsService;
            _hostingEnv = hostingEnv;
        }
        
        [HttpGet("{id}", Name = "GetComment")]
        public IActionResult GetById(int id)
        {
            var comment = _commentsService.GetById(id);

            if (comment == null)
            {
                return NotFound();
            }

            var commentDto = CommentDto.Get(comment);

            return new ObjectResult(commentDto);
        }

        [HttpPost]
        [ValidateModel]
        public IActionResult Create([FromBody] CommentDto commentDto)
        {
            if (commentDto == null)
            {
                return BadRequest();
            }

            var comment = _commentsService.Create(commentDto);

            return CreatedAtRoute("GetComment", new { id = comment.CommentId }, comment);
        }

        [HttpPut("{id}")]
        [ValidateModel]
        public IActionResult Update(int id, [FromBody] CommentDto commentDto)
        {
            if (commentDto == null || commentDto.CommentId != id)
            {
                return BadRequest();
            }

            var result = _commentsService.Update(id, commentDto);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result = _commentsService.Delete(id);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }
    }
}
