export default function Modal({onClose, isVisible, conteudo}){
    return (
        <div className="w-full relative">
        <div id="subscribe-form-modal" className="pd-overlay  hidden w-full h-full fixed top-0 left-0 z-[100] overflow-x-hidden overflow-y-auto">
        <div className=" opacity-0  ease-out  sm:max-w-lg sm:w-full m-5 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
          <div className="flex flex-col bg-white rounded-2xl py-4 px-5">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h4 className="text-sm text-gray-900 font-medium">Subscribe to newsletter</h4>
              <button className="block cursor-pointer close-modal-button" data-pd-overlay="#subscribe-form-modal" data-modal-target="subscribe-form-modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto py-4 min-h-[130px]">
              <div className="relative">
                <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">Email </label>
                <input type="text" id="default-search" className="block w-full h-11 px-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none " placeholder="Enter your email" required="" />
              </div>
            </div>
            <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
              <button type="button" className="py-2.5 px-5 text-xs bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100 close-modal-button" data-pd-overlay="#subscribe-form-modal" data-modal-target="subscribe-form-modal">Cancel</button>
              <button type="button" className="py-2.5 px-5 text-xs  bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 close-modal-button" data-pd-overlay="#subscribe-form-modal" data-modal-target="subscribe-form-modal">Okay, got it</button>
            </div>
          </div>
        </div>
        </div>
        </div>
      );
}