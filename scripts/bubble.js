function Bubble()
{
    c_delay=0;
    yellowColor = "#FFFC00";
    greenColor = "#25D366";
    blueColor = "#1DA1F2";
    redColor = "#FF0000";

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],yellowColor);//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], redColor);//Color update
                div_update(divs[j+1],div_sizes[j+1], redColor);//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], redColor);//Height update
                div_update(divs[j+1],div_sizes[j+1], redColor);//Height update
            }
            div_update(divs[j],div_sizes[j], blueColor);//Color updat
        }
        div_update(divs[j],div_sizes[j], greenColor);//Color update
    }
    div_update(divs[0],div_sizes[0], greenColor);//Color update

    enable_buttons();
}
