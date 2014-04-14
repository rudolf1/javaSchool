package javaschool;

import com.sun.jersey.spi.container.servlet.PerSession;

import java.util.List;

/**
 * Created by arudenko on 14.04.14.
 */
@PerSession
public class UserSession {

    private List<Entry> list;

    public List<Entry> getList() {
        return list;
    }

    public void setList(List<Entry> list) {
        this.list = list;
    }
}
