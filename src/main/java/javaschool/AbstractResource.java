package javaschool;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.Context;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Created by arudenko on 14.04.14.
 */
public class AbstractResource {
    Random r = new Random();

    @Context
    HttpServletRequest httpRequest;
    private String ATTR_NAME = "list";


    public void setHttpRequest(HttpServletRequest httpRequest) {
        this.httpRequest = httpRequest;
    }
    public List<Entry> getItems() {
        HttpSession session = httpRequest.getSession(true);
        if (session.getAttribute(ATTR_NAME) == null) {
            List<Entry> res = new ArrayList<Entry>();
            for (int i = 0; i < 10; i++) {
                Entry item = new Entry();
                item.setId(r.nextInt());
                item.setName("Item " + r.nextInt(100));
                res.add(item);
            }
            session.setAttribute(ATTR_NAME, res);
        }

        return (List<Entry>) session.getAttribute(ATTR_NAME);
    }


}
