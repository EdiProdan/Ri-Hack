package babel.backend.controller;

import babel.backend.model.Ticket;
import babel.backend.model.dto.TicketDTO;
import babel.backend.service.TicketService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/tickets")
public class TicketController {

    private final TicketService ticketService;


    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping
    public List<TicketDTO> getAllTickets(){
        return ticketService.getAllTickets();
    }

    @PostMapping
    public TicketDTO addTicket(@RequestBody TicketDTO ticket){
        return ticketService.addTicket(ticket);
    }

    @DeleteMapping(path = "{id}")
    public void deleteTicket(@PathVariable("id") Long id) {
        ticketService.deleteTicket(id);
    }
}
