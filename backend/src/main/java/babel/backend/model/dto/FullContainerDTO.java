package babel.backend.model.dto;

import babel.backend.model.TrashContainer;

import java.util.Date;

public class FullContainerDTO {
    private Long id;

    private Long containerId;

    private Date timeAdded;

    public FullContainerDTO() {
    }

    public FullContainerDTO(Long id, Long containerId, Date timeAdded) {
        this.id = id;
        this.containerId = containerId;
        this.timeAdded = timeAdded;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getContainerId() {
        return containerId;
    }

    public void setContainerId(Long containerId) {
        this.containerId = containerId;
    }

    public Date getTimeAdded() {
        return timeAdded;
    }

    public void setTimeAdded(Date timeAdded) {
        this.timeAdded = timeAdded;
    }
}
