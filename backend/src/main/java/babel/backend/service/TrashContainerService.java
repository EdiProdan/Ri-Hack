package babel.backend.service;

import babel.backend.model.TrashContainer;
import babel.backend.model.dto.TrashContainerDTO;

import java.util.List;

public interface TrashContainerService {
    public List<TrashContainerDTO> getAllTrashContainers();
    public TrashContainerDTO getTrashContainerById(Long id);
    public TrashContainerDTO insertTrashContainer(TrashContainerDTO trashContainerDTO);
    public void deleteTrashContainer(Long id);
    public TrashContainerDTO updateTrashContainer(TrashContainerDTO dto, Long id);
}