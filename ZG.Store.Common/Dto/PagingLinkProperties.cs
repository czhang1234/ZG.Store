using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZG.Store.Common.Dto
{
    public class PagingLinkProperties
    {
        public string HRef { get; set; }
        public string Text { get; set; }
        public string CSSClass { get; set; }

        public PagingLinkProperties()
        {
            HRef = Text = CSSClass = "";
        }
    }
}
