package babel.backend.model.mapper;

import babel.backend.model.Ticket;
import babel.backend.model.dto.TicketDTO;

public class TicketMapper {
    public static TicketDTO toDto(Ticket ticket){
        TicketDTO dto = new TicketDTO();

        dto.setId(ticket.getId());
        dto.setMail(ticket.getMail());
        dto.setLocationLat(ticket.getLocationLat());
        dto.setLocationLong(ticket.getLocationLong());
        dto.setTicketType(ticket.getTicketType());
        dto.setDescription(ticket.getDescription());

        return dto;
    }

    public static Ticket fromDto(TicketDTO dto){
        Ticket ticket = new Ticket();

        ticket.setId(dto.getId());
        ticket.setMail(dto.getMail());
        ticket.setLocationLat(dto.getLocationLat());
        ticket.setLocationLong(dto.getLocationLong());
        ticket.setTicketType(dto.getTicketType());
        ticket.setDescription(dto.getDescription());

        return ticket;
    }
}
