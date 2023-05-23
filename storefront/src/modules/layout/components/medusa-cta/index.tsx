const MedusaCTA = () => {
  return (
    <div className="py-4 flex justify-center items-center w-full">
      <div className="content-container flex justify-center flex-1">
        <a href="https://www.medusajs.com" target="_blank" rel="noreferrer" className="hidden">
          <PoweredBy />
        </a>
      </div>
    </div>
  )
}

const PoweredBy = () => {
  return (
    <svg
      width="158"
      height="24"
      viewBox="0 0 158 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_106_685)">
        <path
          d="M1.656 15.09V18.716H0.62V9.14H1.628V10.078C2.25333 9.34067 3.03267 8.972 3.966 8.972C4.89933 8.972 5.66467 9.322 6.262 10.022C6.85933 10.7033 7.158 11.5527 7.158 12.57C7.158 13.5873 6.85933 14.4367 6.262 15.118C5.65533 15.8087 4.89 16.154 3.966 16.154C3.02333 16.154 2.25333 15.7993 1.656 15.09ZM5.492 14.446C5.89333 13.9607 6.094 13.3353 6.094 12.57C6.094 11.8047 5.89333 11.1793 5.492 10.694C5.08133 10.1993 4.54 9.952 3.868 9.952C3.18667 9.952 2.64067 10.1993 2.23 10.694C1.82867 11.1793 1.628 11.8047 1.628 12.57C1.628 13.3353 1.82867 13.9607 2.23 14.446C2.64067 14.9407 3.18667 15.188 3.868 15.188C4.54 15.188 5.08133 14.9407 5.492 14.446ZM12.2733 16.154C11.2933 16.154 10.4719 15.8087 9.80925 15.118C9.15592 14.4273 8.82925 13.578 8.82925 12.57C8.82925 11.562 9.15592 10.7127 9.80925 10.022C10.4719 9.322 11.2933 8.972 12.2733 8.972C13.2533 8.972 14.0746 9.322 14.7373 10.022C15.4093 10.722 15.7452 11.5713 15.7452 12.57C15.7452 13.5593 15.4139 14.4087 14.7513 15.118C14.0886 15.8087 13.2626 16.154 12.2733 16.154ZM12.2733 15.188C12.9733 15.188 13.5473 14.9407 13.9953 14.446C14.4433 13.942 14.6673 13.3167 14.6673 12.57C14.6673 11.814 14.4433 11.1933 13.9953 10.708C13.5473 10.204 12.9733 9.952 12.2733 9.952C11.5826 9.952 11.0133 10.204 10.5653 10.708C10.1173 11.1933 9.89325 11.814 9.89325 12.57C9.89325 13.3167 10.1173 13.942 10.5653 14.446C11.0133 14.9407 11.5826 15.188 12.2733 15.188ZM17.8424 9.14L19.4244 14.866L21.0064 9.14H22.4064L23.9884 14.866L25.5704 9.14H26.7044L24.6604 16H23.3724L21.7064 10.33L20.0544 16H18.7524L16.7084 9.14H17.8424ZM33.8708 12.416L33.8568 12.892H28.7468C28.7934 13.6107 29.0221 14.1753 29.4328 14.586C29.8434 14.9873 30.3848 15.188 31.0568 15.188C31.8221 15.188 32.4754 14.852 33.0168 14.18L33.7308 14.838C33.0028 15.7153 32.1114 16.154 31.0568 16.154C30.0301 16.154 29.2088 15.8273 28.5928 15.174C27.9861 14.5113 27.6828 13.6573 27.6828 12.612C27.6828 11.5667 27.9628 10.7033 28.5228 10.022C29.0921 9.322 29.8528 8.972 30.8048 8.972C31.5048 8.972 32.0928 9.154 32.5688 9.518C33.4368 10.1713 33.8708 11.1373 33.8708 12.416ZM30.8328 9.952C30.2634 9.952 29.8014 10.134 29.4468 10.498C29.1014 10.862 28.8821 11.352 28.7888 11.968H32.8208C32.7741 11.352 32.5688 10.862 32.2048 10.498C31.8501 10.134 31.3928 9.952 30.8328 9.952ZM39.3401 9.056V10.05C39.2934 10.0407 39.2141 10.036 39.1021 10.036C38.2807 10.036 37.6927 10.2693 37.3381 10.736C36.9927 11.1933 36.8201 11.9727 36.8201 13.074V16H35.7841V9.14H36.7921V10.05C37.0907 9.686 37.4081 9.42933 37.7441 9.28C38.0894 9.12133 38.5187 9.042 39.0321 9.042C39.1721 9.042 39.2747 9.04667 39.3401 9.056ZM46.5856 12.416L46.5716 12.892H41.4616C41.5083 13.6107 41.7369 14.1753 42.1476 14.586C42.5583 14.9873 43.0996 15.188 43.7716 15.188C44.5369 15.188 45.1903 14.852 45.7316 14.18L46.4456 14.838C45.7176 15.7153 44.8263 16.154 43.7716 16.154C42.7449 16.154 41.9236 15.8273 41.3076 15.174C40.7009 14.5113 40.3976 13.6573 40.3976 12.612C40.3976 11.5667 40.6776 10.7033 41.2376 10.022C41.8069 9.322 42.5676 8.972 43.5196 8.972C44.2196 8.972 44.8076 9.154 45.2836 9.518C46.1516 10.1713 46.5856 11.1373 46.5856 12.416ZM43.5476 9.952C42.9783 9.952 42.5163 10.134 42.1616 10.498C41.8163 10.862 41.5969 11.352 41.5036 11.968H45.5356C45.4889 11.352 45.2836 10.862 44.9196 10.498C44.5649 10.134 44.1076 9.952 43.5476 9.952ZM49.1549 10.022C49.7616 9.322 50.5269 8.972 51.4509 8.972C52.3749 8.972 53.1449 9.33133 53.7609 10.05V6.186H54.7969V16H53.8029V15.062C53.1776 15.79 52.3936 16.154 51.4509 16.154C50.5269 16.154 49.7616 15.8087 49.1549 15.118C48.5576 14.4367 48.2589 13.5873 48.2589 12.57C48.2589 11.5527 48.5576 10.7033 49.1549 10.022ZM49.9249 10.694C49.5236 11.1793 49.3229 11.8047 49.3229 12.57C49.3229 13.3353 49.5236 13.9607 49.9249 14.446C50.3356 14.9407 50.8769 15.188 51.5489 15.188C52.2303 15.188 52.7763 14.9407 53.1869 14.446C53.5976 13.9513 53.8029 13.326 53.8029 12.57C53.8029 11.814 53.5976 11.1887 53.1869 10.694C52.7763 10.1993 52.2303 9.952 51.5489 9.952C50.8769 9.952 50.3356 10.1993 49.9249 10.694ZM62.3448 15.062V16H61.3368V6.186H62.3728V10.05C62.9888 9.33133 63.7588 8.972 64.6828 8.972C65.6161 8.972 66.3815 9.322 66.9788 10.022C67.5761 10.7033 67.8748 11.5527 67.8748 12.57C67.8748 13.5873 67.5761 14.4367 66.9788 15.118C66.3721 15.8087 65.6068 16.154 64.6828 16.154C63.7588 16.154 62.9795 15.79 62.3448 15.062ZM66.2088 14.446C66.6101 13.9607 66.8108 13.3353 66.8108 12.57C66.8108 11.8047 66.6101 11.1793 66.2088 10.694C65.7981 10.1993 65.2568 9.952 64.5848 9.952C63.9035 9.952 63.3575 10.1993 62.9468 10.694C62.5455 11.1793 62.3448 11.8047 62.3448 12.57C62.3448 13.3353 62.5455 13.9607 62.9468 14.446C63.3575 14.9407 63.9035 15.188 64.5848 15.188C65.2568 15.188 65.7981 14.9407 66.2088 14.446ZM75.6016 9.14L71.7656 18.716H70.6316L71.6676 16.084L68.8256 9.14H69.9876L72.2416 14.838L74.4536 9.14H75.6016Z"
          fill="#9CA3AF"
        />
        <path
          d="M97.5967 6.59719L93.9438 4.51277C92.7486 3.82908 91.284 3.82908 90.0888 4.51277L86.4191 6.59719C85.2407 7.28088 84.5 8.5482 84.5 9.89891V14.0844C84.5 15.4518 85.2407 16.7024 86.4191 17.3861L90.072 19.4872C91.2672 20.1709 92.7317 20.1709 93.9269 19.4872L97.5798 17.3861C98.775 16.7024 99.4989 15.4518 99.4989 14.0844V9.89891C99.5326 8.5482 98.7919 7.28088 97.5967 6.59719ZM92.0079 15.7186C89.9373 15.7186 88.2539 14.0511 88.2539 12C88.2539 9.94893 89.9373 8.2814 92.0079 8.2814C94.0784 8.2814 95.7786 9.94893 95.7786 12C95.7786 14.0511 94.0953 15.7186 92.0079 15.7186Z"
          fill="#9CA3AF"
        />
        <path
          d="M114.332 16H112.75V11.898C112.75 11.4407 112.638 11.0813 112.414 10.82C112.19 10.5493 111.882 10.414 111.49 10.414C111.042 10.414 110.692 10.5633 110.44 10.862C110.197 11.1607 110.076 11.5713 110.076 12.094V16H108.48V9.14H110.048V9.742C110.477 9.22867 111.07 8.972 111.826 8.972C112.675 8.972 113.315 9.27067 113.744 9.868C114.276 9.27067 114.99 8.972 115.886 8.972C116.782 8.972 117.459 9.23333 117.916 9.756C118.383 10.2693 118.616 11.0207 118.616 12.01V16H117.02V11.898C117.02 11.4407 116.908 11.0813 116.684 10.82C116.46 10.5493 116.152 10.414 115.76 10.414C115.312 10.414 114.962 10.568 114.71 10.876C114.458 11.1747 114.332 11.5807 114.332 12.094V16ZM126.38 12.486L126.366 13.046H121.676C121.714 13.5593 121.896 13.9653 122.222 14.264C122.549 14.5627 122.969 14.712 123.482 14.712C124.22 14.712 124.808 14.39 125.246 13.746L126.324 14.754C125.596 15.6873 124.649 16.154 123.482 16.154C122.446 16.154 121.616 15.8273 120.99 15.174C120.356 14.5113 120.038 13.6573 120.038 12.612C120.038 11.5947 120.328 10.7313 120.906 10.022C121.494 9.322 122.274 8.972 123.244 8.972C124.28 8.972 125.06 9.31733 125.582 10.008C126.114 10.6987 126.38 11.5247 126.38 12.486ZM123.258 10.428C122.857 10.428 122.526 10.554 122.264 10.806C122.012 11.058 121.844 11.38 121.76 11.772H124.686C124.677 11.3893 124.551 11.072 124.308 10.82C124.066 10.5587 123.716 10.428 123.258 10.428ZM131.081 8.972C131.847 8.972 132.486 9.196 132.999 9.644V6.186H134.595V16H133.027V15.384C132.542 15.8973 131.893 16.154 131.081 16.154C130.111 16.154 129.308 15.818 128.673 15.146C128.048 14.4647 127.735 13.606 127.735 12.57C127.735 11.534 128.048 10.6753 128.673 9.994C129.299 9.31267 130.101 8.972 131.081 8.972ZM132.537 11.002C132.211 10.5913 131.763 10.386 131.193 10.386C130.624 10.386 130.176 10.5913 129.849 11.002C129.523 11.4127 129.359 11.9353 129.359 12.57C129.359 13.2047 129.523 13.7273 129.849 14.138C130.176 14.5487 130.624 14.754 131.193 14.754C131.763 14.754 132.211 14.5487 132.537 14.138C132.864 13.7273 133.027 13.2047 133.027 12.57C133.027 11.9353 132.864 11.4127 132.537 11.002ZM136.353 9.14H137.949V13.242C137.949 13.6993 138.061 14.0633 138.285 14.334C138.509 14.5953 138.826 14.726 139.237 14.726C139.675 14.726 140.021 14.572 140.273 14.264C140.534 13.9467 140.665 13.5267 140.665 13.004V9.14H142.261V16H140.693V15.44C140.254 15.916 139.661 16.154 138.915 16.154C138.131 16.154 137.505 15.888 137.039 15.356C136.581 14.8147 136.353 14.0727 136.353 13.13V9.14ZM146.99 13.41L146.08 13.186C144.69 12.8593 143.994 12.136 143.994 11.016C143.994 10.4 144.228 9.90533 144.694 9.532C145.161 9.15867 145.763 8.972 146.5 8.972C147.49 8.972 148.353 9.35467 149.09 10.12L148.068 11.212C147.648 10.6333 147.112 10.344 146.458 10.344C146.178 10.344 145.95 10.4093 145.772 10.54C145.604 10.6613 145.52 10.8107 145.52 10.988C145.52 11.3053 145.744 11.52 146.192 11.632L147.27 11.884C148.67 12.2013 149.37 12.9153 149.37 14.026C149.37 14.6607 149.128 15.174 148.642 15.566C148.166 15.958 147.504 16.154 146.654 16.154C145.46 16.154 144.512 15.7107 143.812 14.824L144.82 13.788C145.324 14.4507 145.978 14.782 146.78 14.782C147.48 14.782 147.83 14.5487 147.83 14.082C147.83 13.7833 147.55 13.5593 146.99 13.41ZM152.809 16.154C152.147 16.154 151.596 15.9673 151.157 15.594C150.719 15.2113 150.499 14.7027 150.499 14.068C150.499 13.34 150.761 12.7753 151.283 12.374C151.806 11.9727 152.497 11.772 153.355 11.772C153.785 11.772 154.247 11.8513 154.741 12.01V11.548C154.741 11.212 154.615 10.9413 154.363 10.736C154.111 10.5213 153.789 10.414 153.397 10.414C152.679 10.414 152.137 10.7453 151.773 11.408L150.695 10.4C150.947 9.94267 151.316 9.59267 151.801 9.35C152.296 9.098 152.833 8.972 153.411 8.972C154.317 8.972 155.031 9.196 155.553 9.644C156.076 10.092 156.337 10.7313 156.337 11.562V16H154.769V15.468C154.256 15.9253 153.603 16.154 152.809 16.154ZM152.095 13.956C152.095 14.1893 152.184 14.3807 152.361 14.53C152.548 14.6793 152.805 14.754 153.131 14.754C153.803 14.754 154.34 14.558 154.741 14.166V13.382C154.237 13.1953 153.761 13.102 153.313 13.102C152.94 13.102 152.641 13.1767 152.417 13.326C152.203 13.4753 152.095 13.6853 152.095 13.956Z"
          fill="#9CA3AF"
        />
      </g>
      <defs>
        <clipPath id="clip0_106_685">
          <rect
            width="157"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default MedusaCTA
