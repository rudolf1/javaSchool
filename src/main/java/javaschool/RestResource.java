
package javaschool;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Example resource class hosted at the URI path "/myresource"
 */
@Path("/resource")
public class RestResource extends AbstractResource {

    /**
     * Method processing HTTP GET requests, producing "text/plain" MIME media
     * type.
     *
     * @return String that will be send back as a response of type "text/plain".
     */
    @GET
    @Produces("application/json")
    @Path("getList")
    public List<Entry> getIt() {
        return getItems();
    }

}
