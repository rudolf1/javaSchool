
package javaschool;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/** Example resource class hosted at the URI path "/myresource"
 */
@Path("/resource")
public class RestResource {
    
    /** Method processing HTTP GET requests, producing "text/plain" MIME media
     * type.
     * @return String that will be send back as a response of type "text/plain".
     */
    @GET 
    @Produces("application/json")
    public MyDTO getIt() {

        MyDTO myDTO = new MyDTO();
        myDTO.setArg1(100500);
        myDTO.setArg2("Hello world");
        return myDTO;
    }
}
