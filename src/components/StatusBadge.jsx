const _css = `
  @keyframes status-ping {
    0%        { transform: scale(1);   opacity: 0.75; }
    75%, 100% { transform: scale(2.3); opacity: 0;    }
  }
  .status-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 12px 5px 9px; border-radius: 20px;
    font-size: 10px; font-weight: 600;
    letter-spacing: 0.09em; text-transform: uppercase;
    user-select: none; white-space: nowrap;
    margin-left: auto;
  }
  .status-badge--public  { background: rgba(16,185,129,.15); color: #10b981; border: 1px solid rgba(16,185,129,.3); }
  .status-badge--private { background: rgba(148,163,184,.2); color: #94a3b8; border: 1px solid rgba(148,163,184,.3); }
  .status-badge__dot     { position: relative; width: 8px; height: 8px; display: inline-block; flex-shrink: 0; }
  .status-badge__ping    { position: absolute; inset: 0; border-radius: 50%; background: currentColor; opacity: .75; animation: status-ping 1.5s cubic-bezier(0,0,.2,1) infinite; }
  .status-badge__circle  { position: absolute; inset: 0; border-radius: 50%; background: currentColor; }
`;
if (!document.getElementById('status-badge-css')) {
    const el = document.createElement('style');
    el.id = 'status-badge-css';
    el.textContent = _css;
    document.head.appendChild(el);
}

const StatusBadge = ({ isPublic }) => (
    <span className={`status-badge ${isPublic ? 'status-badge--public' : 'status-badge--private'}`}>
        <span className="status-badge__dot">
            <span className="status-badge__ping" />
            <span className="status-badge__circle" />
        </span>
        {isPublic ? 'Public' : 'Private'}
    </span>
);

export default StatusBadge;