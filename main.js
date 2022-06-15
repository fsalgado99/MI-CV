$(document).ready(function()
{
    var contador=1;  /*necesario para hacer la animacion*/
    $('.mobile-nav-toggle').click(function()
    {
        $('#header').toggle();
        if(contador==1)
        {
            $('#hedaer').animate
            (
                {
                    left:'0'

                }
            );
            contador=0;
        }
        else
        {       
            contador=1;   
                $('#hedaer').animate
                (
                    {
                        left:'-100%'
    
                    }
                );

        }
    })    

});

