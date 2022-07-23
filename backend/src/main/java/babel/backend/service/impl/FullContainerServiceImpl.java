package babel.backend.service.impl;

import babel.backend.model.FullContainer;
import babel.backend.model.TrashContainer;
import babel.backend.model.dto.FullContainerDTO;
import babel.backend.model.mapper.FullContainerMapper;
import babel.backend.repository.FullContainerRepository;
import babel.backend.repository.TrashContainerRepository;
import babel.backend.service.FullContainerService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class FullContainerServiceImpl implements FullContainerService {
    private final FullContainerRepository fullContainerRepository;

    private final TrashContainerRepository trashContainerRepository;

    public FullContainerServiceImpl(FullContainerRepository fullContainerRepository, TrashContainerRepository trashContainerRepository) {
        this.fullContainerRepository = fullContainerRepository;
        this.trashContainerRepository = trashContainerRepository;
    }


    @Override
    public FullContainerDTO addFullContainer(FullContainerDTO dto) {
        Optional<TrashContainer> trashContainer = trashContainerRepository.findById(dto.getContainerId());
        if(trashContainer.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Trash container with specified id not found.");
        }
        FullContainer fullContainer = FullContainerMapper.fromDto(dto);
        fullContainer.setContainer(trashContainer.get());

        fullContainerRepository.save(fullContainer);

        return FullContainerMapper.toDto(fullContainer);
    }
}
