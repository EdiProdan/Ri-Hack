package babel.backend.service;

import babel.backend.model.Ticket;
import babel.backend.model.dto.TicketDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TicketService {
    public TicketDTO addTicket(TicketDTO ticketDTO);
    public List<TicketDTO> getAllTickets();

    public void deleteTicket(Long id);
}
