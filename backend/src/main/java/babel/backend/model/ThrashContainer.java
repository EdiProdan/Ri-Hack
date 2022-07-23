package babel.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Id;

@Entity
public class ThrashContainer {

    @Id
    private int id;

    private double locationLong;

    private double locationLat;

    @Column(nullable = false)
    @Enumerated
    private ThrashContainerType thrashType;

    public ThrashContainer() { }

    public ThrashContainer(int id, double locationLong, double locationLat, ThrashContainerType thrashType) {
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

    public ThrashContainerType getThrashType() {
        return thrashType;
    }
}
