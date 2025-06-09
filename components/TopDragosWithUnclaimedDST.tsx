import { CardOneRow } from './partials/CardOneRow';
import { useCachedDragos } from 'app/hooks/useCachedDragos';
import { getDragosWithUnclaimedDST } from 'app/controllers/dragoUnclaimedDSTController';
import { DragoWithUnclaimedDST } from 'app/types/dragoWithUnclaimedDSTTypes';

const TopDragosWithUnclaimedDST = () => {
  const { dragos } = useCachedDragos();

  const getTopDragosWithUnclaimedDST: DragoWithUnclaimedDST[] = getDragosWithUnclaimedDST(
    dragos ?? []
  );
  return <CardOneRow dragos={getTopDragosWithUnclaimedDST} />;
};

export default TopDragosWithUnclaimedDST;
