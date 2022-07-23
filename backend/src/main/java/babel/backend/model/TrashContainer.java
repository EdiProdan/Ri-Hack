package babel.backend.model;

import jdk.incubator.vector.DoubleVector;

import javax.persistence.*;

@Entity
public class TrashContainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double locationLong;

    private Double locationLat;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TrashContainerType trashType;

    public TrashContainer() { }

    public TrashContainer(Long id, Double locationLong, Double locationLat, TrashContainerType trashType) {
        this.id = id;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
        this.trashType = trashType;
    }

    public Long getId() {
        return id;
    }

    public Double getLocationLat() {
        return locationLat;
    }

    public Double getLocationLong() {
        return locationLong;
    }

    public TrashContainerType getTrashType() {
        return trashType;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLocationLong(Double locationLong) {
        this.locationLong = locationLong;
    }

    public void setLocationLat(Double locationLat) {
        this.locationLat = locationLat;
    }

    public void setTrashType(TrashContainerType trashType) {
        this.trashType = trashType;
    }
}
