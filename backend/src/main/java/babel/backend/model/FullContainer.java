package babel.backend.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
public class FullContainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "container_id", nullable = false)
    private TrashContainer container;

    @CreationTimestamp
    private Date timeAdded;

    public FullContainer() {
    }

    public FullContainer(Long id, TrashContainer container, Date timeAdded) {
        this.id = id;
        this.container = container;
        this.timeAdded = timeAdded;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TrashContainer getContainer() {
        return container;
    }

    public void setContainer(TrashContainer container) {
        this.container = container;
    }

    public Date getTimeAdded() {
        return timeAdded;
    }

    public void setTimeAdded(Date timeAdded) {
        this.timeAdded = timeAdded;
    }


}