package babel.backend.service.impl;

import babel.backend.model.TrashContainer;
import babel.backend.repository.TrashContainerRepository;
import babel.backend.service.TrashContainerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrashContainerServiceImpl implements TrashContainerService {

    private final TrashContainerRepository trashContainerRepository;

    public TrashContainerServiceImpl(TrashContainerRepository trashContainerRepository) {
        this.trashContainerRepository = trashContainerRepository;
    }

    @Override
    public List<TrashContainer> getAllTrashContainers() {
        return trashContainerRepository.findAll();
    }

    @Override
    public TrashContainer getTrashContainerById(Long id) {
        return trashContainerRepository.getReferenceById(id);
    }

    @Override
    public TrashContainer insertTrashContainer(TrashContainer trashContainer) {
        return trashContainerRepository.save(trashContainer);
    }

    @Override

    public void deleteTrashContainer(Long id) {
        trashContainerRepository.deleteById(id);
    }
}
