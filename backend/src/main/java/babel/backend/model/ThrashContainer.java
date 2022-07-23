package babel.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ThrashContainer {

    @Id
    private int id;

    @Column(nullable = false)
    private String description;

    private String mail;

    private double locationLong;

    private double locationLat;

    public ThrashContainer(int id, String description, String mail, double locationLong, double locationLat) {
        this.id = id;
        this.description = description;
        this.mail = mail;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getMail() {
        return mail;
    }

    public double getLocationLat() {
        return locationLat;
    }

    public double getLocationLong() {
        return locationLong;
    }
}
