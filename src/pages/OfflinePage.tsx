import { useTranslation } from "react-i18next";
const OfflinePage = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="p-[1.5em] h-full w-full border-spacing-y-[1.25em] rounded-xl">
				<div className="text-center">
					<h1 className="text-3xl font-semibold">{t("offline.status")}</h1>
					<p className="mt-[1em] text-xl">{t("offline.message")}</p>
				</div>
			</div>
		</>
	);
}

export default OfflinePage;
  