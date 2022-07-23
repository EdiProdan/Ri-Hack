package babel.backend.service.impl;

import babel.backend.model.TrashContainer;
import babel.backend.model.dto.TrashContainerDTO;
import babel.backend.model.mapper.TrashContainerMapper;
import babel.backend.repository.TrashContainerRepository;
import babel.backend.service.TrashContainerService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TrashContainerServiceImpl implements TrashContainerService {

    private final TrashContainerRepository trashContainerRepository;

    public TrashContainerServiceImpl(TrashContainerRepository trashContainerRepository) {
        this.trashContainerRepository = trashContainerRepository;
    }

    @Override
    public List<TrashContainerDTO> getAllTrashContainers() {
        List<TrashContainer> trashContainers = trashContainerRepository.findAll();

        return trashContainers.stream()
                .map(TrashContainerMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public TrashContainerDTO getTrashContainerById(Long id) {
        Optional<TrashContainer> trashContainer = trashContainerRepository.findById(id);

        if(trashContainer.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Trash container with specified id not found.");
        }

        return TrashContainerMapper.toDto(trashContainer.get());
    }

    @Override
    public TrashContainerDTO insertTrashContainer(TrashContainerDTO trashContainerDTO) {
        TrashContainer trashContainer = trashContainerRepository.save(TrashContainerMapper.fromDto(trashContainerDTO));

        return TrashContainerMapper.toDto(trashContainer);
    }

    @Override

    public void deleteTrashContainer(Long id) {
        trashContainerRepository.deleteById(id);
    }
}
