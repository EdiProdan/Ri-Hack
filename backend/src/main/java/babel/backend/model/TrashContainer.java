package babel.backend.model;

import javax.persistence.*;

@Entity
public class TrashContainer {

    @Id
    private int id;

    private double locationLong;

    private double locationLat;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TrashContainerType trashType;

    public TrashContainer() { }

    public TrashContainer(int id, double locationLong, double locationLat, TrashContainerType trashType) {
        this.id = id;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
        this.trashType = trashType;
    }

    public int getId() {
        return id;
    }

    public double getLocationLat() {
        return locationLat;
    }

    public double getLocationLong() {
        return locationLong;
    }

    public TrashContainerType getTrashType() {
        return trashType;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLocationLong(double locationLong) {
        this.locationLong = locationLong;
    }

    public void setLocationLat(double locationLat) {
        this.locationLat = locationLat;
    }

    public void setTrashType(TrashContainerType trashType) {
        this.trashType = trashType;
    }
}
