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
    private TrashContainerType thrashType;

    public TrashContainer() { }

    public TrashContainer(int id, double locationLong, double locationLat, TrashContainerType thrashType) {
        this.id = id;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
        this.thrashType = thrashType;
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

    public TrashContainerType getThrashType() {
        return thrashType;
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

    public void setThrashType(TrashContainerType thrashType) {
        this.thrashType = thrashType;
    }
}
