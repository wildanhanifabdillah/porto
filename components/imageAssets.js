import DesaKesenengLanding from "@/public/image/projects/web/desakeseneng/lp.png";
import DesaKesenengSensor from "@/public/image/projects/web/desakeseneng/sensor.png";
import DesaKesenengMqtt from "@/public/image/projects/web/desakeseneng/mqtt.png";
import TokoManagementThumb from "@/public/image/projects/web/tokoManagement/tokoManagement-thumbnail.png";
import TokoManagement1 from "@/public/image/projects/web/tokoManagement/TokoManagement1.png";
import TokoManagement2 from "@/public/image/projects/web/tokoManagement/tokoManagement2.png";
import WhastoreThumb from "@/public/image/projects/web/whastore/whastore-thumbnail.png";
import Whastore1 from "@/public/image/projects/web/whastore/whastore-1.png";
import Whastore2 from "@/public/image/projects/web/whastore/whastore-2.png";
import Whastore3 from "@/public/image/projects/web/whastore/whastore-3.png";
import AvocycleThumb from "@/public/image/projects/web/avocycle/avocycle-thumbnail.png";
import PredictGoalThumb from "@/public/image/projects/web/predict-goal/predict-goal-thumbnail.png";
import SarponesiaThumb from "@/public/image/projects/web/sarponesia/sarponesia-thumbnail.png";
import SimklinikThumb from "@/public/image/projects/web/simklinik/simklinik-thumbnail.png";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";

export const imageAssets = {
	"/image/projects/web/desakeseneng/lp.png": DesaKesenengLanding,
	"/image/projects/web/desakeseneng/sensor.png": DesaKesenengSensor,
	"/image/projects/web/desakeseneng/mqtt.png": DesaKesenengMqtt,
	"/image/projects/web/tokoManagement/tokoManagement-thumbnail.png": TokoManagementThumb,
	"/image/projects/web/tokoManagement/TokoManagement1.png": TokoManagement1,
	"/image/projects/web/tokoManagement/tokoManagement2.png": TokoManagement2,
	"/image/projects/web/whastore/whastore-thumbnail.png": WhastoreThumb,
	"/image/projects/web/whastore/whastore-1.png": Whastore1,
	"/image/projects/web/whastore/whastore-2.png": Whastore2,
	"/image/projects/web/whastore/whastore-3.png": Whastore3,
	"/image/projects/web/avocycle/avocycle-thumbnail.png": AvocycleThumb,
	"/image/projects/web/predict-goal/predict-goal-thumbnail.png": PredictGoalThumb,
	"/image/projects/web/sarponesia/sarponesia-thumbnail.png": SarponesiaThumb,
	"/image/projects/web/simklinik/simklinik-thumbnail.png": SimklinikThumb,
	"/image/me1.jpg": Me1,
	"/image/me2.jpg": Me2,
	"/image/me3.jpg": Me3,
};

export function getImageAsset(src) {
	return imageAssets[src] || null;
}
