using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using ZG.Store.Services;
using ZG.Store.Common;
using Microsoft.AspNetCore.Authorization;
using ZG.Store.Domain.DTO;
using ZG.Store.Admin.CustomActionfilters;

namespace ZG.Store.Admin.Controllers
{
    [Authorize("Bearer")]
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public IActionResult GetById(int id)
        {
            var order = _orderService.GetById(id);

            if (order == null)
            {
                return NotFound();
            }

            var orderDto = OrderDto.Get(order);

            return new ObjectResult(orderDto);
        }

        [HttpPut]
        [ValidateModel]
        public IActionResult Update(int id, [FromBody]OrderSaveModel order)
        {
            if(order == null || order.Id != id)
            {
                return BadRequest();
            }

            var result = _orderService.Update(order);
            if (result == CRUDStatus.NotFound)
            {
                return NotFound();
            }

            return new NoContentResult();
        }
    }
}
