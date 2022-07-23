package babel.backend.service;

import babel.backend.model.Ticket;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TicketService {
    public Ticket addTicket(Ticket ticket);
    public List<Ticket> getAllTickets();

    public void deleteTicket(Long id);
}
