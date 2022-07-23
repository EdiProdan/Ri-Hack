package babel.backend.model.mapper;

import babel.backend.model.TrashContainer;
import babel.backend.model.dto.TrashContainerDTO;

public class TrashContainerMapper {
    public static TrashContainerDTO toDto(TrashContainer trashContainer){
        TrashContainerDTO dto = new TrashContainerDTO();

        dto.setId(trashContainer.getId());
        dto.setLocationLong(trashContainer.getLocationLong());
        dto.setLocationLat(trashContainer.getLocationLat());
        dto.setTrashType(trashContainer.getTrashType());

        return dto;
    }

    public static TrashContainer fromDto(TrashContainerDTO dto){
        TrashContainer trashContainer = new TrashContainer();

        trashContainer.setId(dto.getId());
        trashContainer.setLocationLong(dto.getLocationLong());
        trashContainer.setLocationLat(dto.getLocationLat());
        trashContainer.setTrashType(dto.getTrashType());

        return trashContainer;
    }
}
