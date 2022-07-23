package babel.backend.service.impl;

import babel.backend.model.Ticket;
import babel.backend.model.dto.TicketDTO;
import babel.backend.model.mapper.TicketMapper;
import babel.backend.repository.TicketRepository;
import babel.backend.service.TicketService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TicketServiceImpl implements TicketService {

    private final TicketRepository ticketRepository;

    public TicketServiceImpl(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    @Override
    public TicketDTO addTicket(TicketDTO ticketDTO) {
        Ticket ticket = ticketRepository.save(TicketMapper.fromDto(ticketDTO));

        return TicketMapper.toDto(ticket);
    }

    @Override
    public List<TicketDTO> getAllTickets() {
        return ticketRepository.findAll().stream()
                .map(TicketMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteTicket(Long id) {
        if(ticketRepository.findById(id).isEmpty()){
            throw new ResponseStatusException(HttpStatus.NO_CONTENT, "Ticket with specified id not found.");
        }
        ticketRepository.deleteById(id);
    }
}
