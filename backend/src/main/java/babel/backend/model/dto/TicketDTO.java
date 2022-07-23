package babel.backend.model.dto;

import babel.backend.model.TicketType;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

public class TicketDTO {

    @Null
    private Long id;

    private String mail;

    private Double locationLat;

    private Double locationLong;

    @NotNull
    private TicketType ticketType;

    @NotNull
    private String description;

    public TicketDTO() {
    }

    public TicketDTO(Long id, String mail, Double locationLat, Double locationLong, TicketType ticketType, String description) {
        this.id = id;
        this.mail = mail;
        this.locationLat = locationLat;
        this.locationLong = locationLong;
        this.ticketType = ticketType;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Double getLocationLat() {
        return locationLat;
    }

    public void setLocationLat(Double locationLat) {
        this.locationLat = locationLat;
    }

    public Double getLocationLong() {
        return locationLong;
    }

    public void setLocationLong(Double locationLong) {
        this.locationLong = locationLong;
    }

    public TicketType getTicketType() {
        return ticketType;
    }

    public void setTicketType(TicketType ticketType) {
        this.ticketType = ticketType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
