package babel.backend.controller;

import babel.backend.model.TrashContainer;
import babel.backend.model.dto.TrashContainerDTO;
import babel.backend.service.TrashContainerService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/trash-containers")
public class TrashContainerController {
    private final TrashContainerService trashContainerService;


    public TrashContainerController(TrashContainerService trashContainerService) {
        this.trashContainerService = trashContainerService;
    }

    @GetMapping
    public List<TrashContainerDTO> getAllTrashContainers(){
        return trashContainerService.getAllTrashContainers();
    }

    @GetMapping(path="{id}")
    public TrashContainerDTO getTrashContainerById(@PathVariable("id") Long id) {
        return trashContainerService.getTrashContainerById(id);
    }

    @PostMapping
    public TrashContainerDTO insertTrashContainer(@Valid @RequestBody TrashContainerDTO trashContainerDTO) {
        return trashContainerService.insertTrashContainer(trashContainerDTO);
    }

    @DeleteMapping(path="{id}")
    public void deleteTrashContainer(@PathVariable("id") Long id) {
        trashContainerService.deleteTrashContainer(id);
    }

}
