package babel.backend.model.dto;

import babel.backend.model.TrashContainerType;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

public class TrashContainerDTO {

    private Long id;

    @NotNull
    private Double locationLong;

    @NotNull
    private Double locationLat;

    @NotNull
    private TrashContainerType trashType;

    public TrashContainerDTO() {
    }

    public TrashContainerDTO(Long id, Double locationLong, Double locationLat, TrashContainerType trashType) {
        this.id = id;
        this.locationLong = locationLong;
        this.locationLat = locationLat;
        this.trashType = trashType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getLocationLong() {
        return locationLong;
    }

    public void setLocationLong(Double locationLong) {
        this.locationLong = locationLong;
    }

    public Double getLocationLat() {
        return locationLat;
    }

    public void setLocationLat(Double locationLat) {
        this.locationLat = locationLat;
    }

    public TrashContainerType getTrashType() {
        return trashType;
    }

    public void setTrashType(TrashContainerType trashType) {
        this.trashType = trashType;
    }
}
