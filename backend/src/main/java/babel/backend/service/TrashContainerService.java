package babel.backend.service;

import babel.backend.model.TrashContainer;

import java.util.List;

public interface TrashContainerService {
    public List<TrashContainer> getAllTrashContainers();
    public TrashContainer getTrashContainerById(Long id);
    public TrashContainer insertTrashContainer(TrashContainer trashContainer);
    public void deleteTrashContainer(Long id);
}